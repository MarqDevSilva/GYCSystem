package com.gyc.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gyc.spring.dto.HospedagemDTO;
import com.gyc.spring.exception.SystemNotFound;
import com.gyc.spring.mapper.HospedagemMapper;
import com.gyc.spring.model.Hospedagem;
import com.gyc.spring.repository.HospedagemRepository;

@Service
public class HospedagemService extends BaseService<Hospedagem, HospedagemDTO> {

    @Autowired
    private HospedagemRepository hospRepository;

    public HospedagemService(HospedagemRepository repository, HospedagemMapper mapper){
        super(repository, mapper);
    }

    public List<HospedagemDTO> findByEvento(Long id){
        List<Hospedagem> list = hospRepository.findByEventoId(id);
        return mapper.toDto(list);
    }

    public HospedagemDTO update(Long id, HospedagemDTO entity) {
        if (repository.existsById(id)) {
            return update(entity);
        } else {
            throw new SystemNotFound("Não encontrado.");
        }
    }
}
