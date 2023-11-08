package com.gyc.spring.service;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gyc.spring.exception.SystemNotFound;
import com.gyc.spring.mapper.config.EntityMapper;
import com.gyc.spring.model.DomainGeneric;

import jakarta.transaction.Transactional;


public abstract class GenericService<T extends DomainGeneric, ID, DTO> {
	
	protected final JpaRepository<T, ID> repository;

	protected final EntityMapper<DTO, T> mapper;

	public GenericService(JpaRepository<T, ID> repository, EntityMapper<DTO, T> mapper) {
		this.repository = repository;
		this.mapper = mapper;
	}

	@Transactional
	public T save(T entidade) {
		return repository.save(entidade);
	}

	@Transactional
	public List<T> saveAll(List<T> entidades) {
		return repository.saveAll(entidades);
	}

	@Transactional
	public DTO saveDTO(DTO dto) {
		return mapper.toDto(repository.save(mapper.toEntity(dto)));
	}

	@Transactional
	public List<DTO> saveAllDTO(List<DTO> listDTO) {
		return mapper.toDto(repository.saveAll(mapper.toEntity(listDTO)));
	}

	@Transactional
	public T update(T entidade) {
		return repository.saveAndFlush(entidade);
	}

	@Transactional
	public DTO atualizar(DTO dto) {
		return mapper.toDto(repository.saveAndFlush(mapper.toEntity(dto)));
	}

	public void delete(ID id) {
		repository.deleteById(id);
	}

	public List<DTO> buscarTodos() {
		return mapper.toDto(repository.findAll()) ;
	}

	public List<T> findAll() {
		return repository.findAll();
	}

	public DTO buscarPorID(ID id) {
		return mapper.toDto(repository.findById(id).orElseThrow(() -> new SystemNotFound("Não encontrado.")));
	}

	public T findById(ID id) {
		return repository.findById(id)
				.orElseThrow(() -> new SystemNotFound("Não encontrado."));
	}
}
