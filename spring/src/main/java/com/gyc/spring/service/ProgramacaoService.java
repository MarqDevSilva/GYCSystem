package com.gyc.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gyc.spring.dto.PalestranteDTO;
import com.gyc.spring.dto.ProgramacaoDTO;
import com.gyc.spring.exception.SystemNotFound;
import com.gyc.spring.mapper.ProgramacaoMapper;
import com.gyc.spring.model.Palestrantes;
import com.gyc.spring.model.Programacao;
import com.gyc.spring.repository.ProgramacaoRepository;

@Service
public class ProgramacaoService extends BaseService<Programacao, ProgramacaoDTO> {

    @Autowired
    private ProgramacaoRepository progRepository;

    public ProgramacaoService(ProgramacaoRepository repository, ProgramacaoMapper mapper){
        super(repository, mapper);
    }

    public List<ProgramacaoDTO> findByEvento(Long id){
        List<Programacao> list = progRepository.findByEventoId(id);
        return mapper.toDto(list);
    }

    public void deleteByIds(List<Long> ids){
        progRepository.deleteAllById(ids);
    }

    public ProgramacaoDTO update(Long id, ProgramacaoDTO entity) {
        if (repository.existsById(id)) {
            return update(entity);
        } else {
            throw new SystemNotFound("Não encontrado.");
        }
    }
}